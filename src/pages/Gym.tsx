import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Minus, Save, Dumbbell } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

interface Exercise {
  name: string;
  sets: { reps: number; weight: number }[];
}

const Gym = () => {
  const { toast } = useToast();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState("");

  const addExercise = () => {
    if (!currentExercise.trim()) return;
    
    setExercises([...exercises, { name: currentExercise, sets: [{ reps: 0, weight: 0 }] }]);
    setCurrentExercise("");
  };

  const addSet = (exerciseIndex: number) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets.push({ reps: 0, weight: 0 });
    setExercises(newExercises);
  };

  const removeSet = (exerciseIndex: number, setIndex: number) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets.splice(setIndex, 1);
    setExercises(newExercises);
  };

  const updateSet = (exerciseIndex: number, setIndex: number, field: 'reps' | 'weight', value: string) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets[setIndex][field] = parseInt(value) || 0;
    setExercises(newExercises);
  };

  const saveWorkout = () => {
    if (exercises.length === 0) {
      toast({
        title: "No exercises added",
        description: "Add at least one exercise to save your workout",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Workout saved!",
      description: `${exercises.length} exercise${exercises.length > 1 ? 's' : ''} logged successfully`,
    });
    
    setExercises([]);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="pt-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Gym Workout</h1>
              <p className="text-sm text-muted-foreground">Track your strength training</p>
            </div>
          </div>
        </div>

        {/* Add Exercise */}
        <Card className="p-4 border-primary/30">
          <Label htmlFor="exercise" className="text-sm font-medium">Add Exercise</Label>
          <div className="flex gap-2 mt-2">
            <Input
              id="exercise"
              placeholder="e.g., Bench Press, Squat..."
              value={currentExercise}
              onChange={(e) => setCurrentExercise(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addExercise()}
              className="bg-background"
            />
            <Button onClick={addExercise} size="icon" className="shrink-0">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Exercises List */}
        <div className="space-y-4">
          {exercises.map((exercise, exerciseIndex) => (
            <Card key={exerciseIndex} className="p-4 border-primary/20">
              <h3 className="font-semibold text-lg mb-3">{exercise.name}</h3>
              
              <div className="space-y-2">
                {exercise.sets.map((set, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground w-12">Set {setIndex + 1}</span>
                    <Input
                      type="number"
                      placeholder="Reps"
                      value={set.reps || ''}
                      onChange={(e) => updateSet(exerciseIndex, setIndex, 'reps', e.target.value)}
                      className="bg-background"
                    />
                    <Input
                      type="number"
                      placeholder="Weight (kg)"
                      value={set.weight || ''}
                      onChange={(e) => updateSet(exerciseIndex, setIndex, 'weight', e.target.value)}
                      className="bg-background"
                    />
                    <Button
                      onClick={() => removeSet(exerciseIndex, setIndex)}
                      size="icon"
                      variant="ghost"
                      className="shrink-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => addSet(exerciseIndex)}
                variant="outline"
                size="sm"
                className="mt-3 w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Set
              </Button>
            </Card>
          ))}

          {exercises.length === 0 && (
            <Card className="p-8 text-center border-dashed">
              <Dumbbell className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
              <p className="text-muted-foreground">No exercises added yet</p>
              <p className="text-sm text-muted-foreground mt-1">Add your first exercise above</p>
            </Card>
          )}
        </div>

        {/* Save Button */}
        {exercises.length > 0 && (
          <Button onClick={saveWorkout} className="w-full h-12" size="lg">
            <Save className="w-4 h-4 mr-2" />
            Save Workout
          </Button>
        )}
      </div>

      <Navigation />
    </div>
  );
};

export default Gym;
