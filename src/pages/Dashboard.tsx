import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, Activity, Target } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="pt-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FitTrack
          </h1>
          <p className="text-muted-foreground mt-1">Track your fitness journey</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="flex flex-col items-center">
              <Activity className="w-5 h-5 text-primary mb-1" />
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">This Week</p>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-accent/20">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-5 h-5 text-accent mb-1" />
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-card to-card/50 border-success/20">
            <div className="flex flex-col items-center">
              <Target className="w-5 h-5 text-success mb-1" />
              <p className="text-2xl font-bold">0%</p>
              <p className="text-xs text-muted-foreground">Goals</p>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Start</h2>
          <div className="grid gap-3">
            <Card className="p-4 bg-gradient-to-r from-primary/10 to-transparent border-primary/30 hover:border-primary/50 transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Plus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Log Gym Workout</p>
                    <p className="text-sm text-muted-foreground">Track sets, reps & weight</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-accent/10 to-transparent border-accent/30 hover:border-accent/50 transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Plus className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Start Cycling</p>
                    <p className="text-sm text-muted-foreground">Track distance & speed</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-success/10 to-transparent border-success/30 hover:border-success/50 transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                    <Plus className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold">Start Running</p>
                    <p className="text-sm text-muted-foreground">Track pace & distance</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
          <Card className="p-8 text-center border-dashed">
            <p className="text-muted-foreground">No workouts yet</p>
            <p className="text-sm text-muted-foreground mt-1">Start your first workout to see it here</p>
          </Card>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Dashboard;
