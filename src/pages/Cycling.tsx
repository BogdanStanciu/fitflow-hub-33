import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bike, Save, Play, Pause } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Cycling = () => {
  const { toast } = useToast();
  const [isTracking, setIsTracking] = useState(false);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [avgSpeed, setAvgSpeed] = useState("");
  const [elevation, setElevation] = useState("");

  const toggleTracking = () => {
    setIsTracking(!isTracking);
    if (!isTracking) {
      toast({
        title: "Tracking started",
        description: "GPS tracking is now active",
      });
    }
  };

  const saveSession = () => {
    if (!distance || !duration) {
      toast({
        title: "Missing information",
        description: "Please enter at least distance and duration",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Ride saved!",
      description: `${distance}km ride logged successfully`,
    });

    setDistance("");
    setDuration("");
    setAvgSpeed("");
    setElevation("");
    setIsTracking(false);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="pt-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Bike className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Cycling</h1>
              <p className="text-sm text-muted-foreground">Track your rides</p>
            </div>
          </div>
        </div>

        {/* GPS Tracking Card */}
        <Card className="p-6 border-accent/30 bg-gradient-to-br from-accent/10 to-transparent">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
              {isTracking ? (
                <Pause className="w-10 h-10 text-accent animate-pulse" />
              ) : (
                <Play className="w-10 h-10 text-accent" />
              )}
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                {isTracking ? "Tracking in progress..." : "Start GPS tracking"}
              </p>
              <Button
                onClick={toggleTracking}
                variant={isTracking ? "outline" : "default"}
                size="lg"
                className="w-full"
              >
                {isTracking ? "Stop Tracking" : "Start GPS Tracking"}
              </Button>
            </div>

            {isTracking && (
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">0.0</p>
                  <p className="text-xs text-muted-foreground">km</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">00:00</p>
                  <p className="text-xs text-muted-foreground">time</p>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Manual Entry */}
        <Card className="p-4 border-accent/20">
          <h3 className="font-semibold mb-4">Manual Entry</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="distance">Distance (km)</Label>
              <Input
                id="distance"
                type="number"
                step="0.1"
                placeholder="0.0"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="bg-background mt-1"
              />
            </div>

            <div>
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="0"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="bg-background mt-1"
              />
            </div>

            <div>
              <Label htmlFor="speed">Average Speed (km/h)</Label>
              <Input
                id="speed"
                type="number"
                step="0.1"
                placeholder="0.0"
                value={avgSpeed}
                onChange={(e) => setAvgSpeed(e.target.value)}
                className="bg-background mt-1"
              />
            </div>

            <div>
              <Label htmlFor="elevation">Elevation Gain (m)</Label>
              <Input
                id="elevation"
                type="number"
                placeholder="0"
                value={elevation}
                onChange={(e) => setElevation(e.target.value)}
                className="bg-background mt-1"
              />
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <Button onClick={saveSession} className="w-full h-12" size="lg">
          <Save className="w-4 h-4 mr-2" />
          Save Ride
        </Button>

        {/* Recent Rides */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Recent Rides</h2>
          <Card className="p-8 text-center border-dashed">
            <Bike className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground">No rides yet</p>
            <p className="text-sm text-muted-foreground mt-1">Start tracking to see your rides here</p>
          </Card>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Cycling;
