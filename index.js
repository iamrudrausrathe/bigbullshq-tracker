
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

export default function RudraGrowthTracker() {
  const [clients, setClients] = useState(30);
  const avgLotsPerClient = 4;
  const monthlySubscription = clients * 60;
  const ibRevenue = clients * avgLotsPerClient * 10;
  const totalRevenue = monthlySubscription + ibRevenue;

  return (
    <div className="p-4 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center">🚀 Rudra & Bruce – Big Bulls HQ</h1>

      <Card>
        <CardContent className="p-4 space-y-2">
          <label className="text-sm font-medium">Update Client Count</label>
          <Input
            type="number"
            value={clients}
            onChange={(e) => setClients(parseInt(e.target.value) || 0)}
            className="w-full"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Clients</h2>
          <p className="text-3xl">{clients}</p>
          <Progress value={(clients / 1000) * 100} className="mt-2" />
          <p className="text-sm text-muted-foreground">Goal: 1,000 Clients</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Subscription Income</h2>
          <p className="text-3xl">${monthlySubscription.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">@ $60 per client</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">IB Commissions</h2>
          <p className="text-3xl">${ibRevenue.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">@ $10 per lot, avg 4 lots/client</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Total Monthly Revenue</h2>
          <p className="text-4xl font-semibold text-green-600">
            ${totalRevenue.toLocaleString()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
