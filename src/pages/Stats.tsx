import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Award, Target } from "lucide-react";
import Navigation from "@/components/Navigation";

const Stats = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="pt-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Statistics</h1>
              <p className="text-sm text-muted-foreground">Your progress overview</p>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium">Total Workouts</p>
            </div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-xs text-muted-foreground mt-1">All time</p>
          </Card>

          <Card className="p-4 border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-accent" />
              <p className="text-sm font-medium">This Week</p>
            </div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-xs text-muted-foreground mt-1">Sessions</p>
          </Card>
        </div>

        {/* Activity Breakdown */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Activity Breakdown</h2>
          <Card className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Gym</p>
                  <p className="text-sm text-muted-foreground">0 sessions</p>
                </div>
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Cycling</p>
                  <p className="text-sm text-muted-foreground">0 km</p>
                </div>
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-medium">Running</p>
                  <p className="text-sm text-muted-foreground">0 km</p>
                </div>
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
          </Card>
        </div>

        {/* Goals */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Active Goals</h2>
          <Card className="p-8 text-center border-dashed">
            <Target className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground">No goals set</p>
            <p className="text-sm text-muted-foreground mt-1">Set your first goal to track progress</p>
          </Card>
        </div>

        {/* Personal Records */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Personal Records</h2>
          <Card className="p-8 text-center border-dashed">
            <Award className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground">No records yet</p>
            <p className="text-sm text-muted-foreground mt-1">Complete workouts to set personal records</p>
          </Card>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Stats;
