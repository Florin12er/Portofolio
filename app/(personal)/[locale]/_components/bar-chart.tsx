import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
    FaCoffee,
    FaCode,
    FaDumbbell,
    FaWalking,
    FaPuzzlePiece,
} from "react-icons/fa";

const chartData = [
    { hobby: "Coding", level: 3, fill: "#4CAF50", icon: FaCode },
    { hobby: "Gym Workouts", level: 2, fill: "#FF5722", icon: FaDumbbell },
    { hobby: "Drinking Coffee", level: 4, fill: "#2196F3", icon: FaCoffee },
    { hobby: "Walking", level: 1, fill: "#FFC107", icon: FaWalking },
    { hobby: "Problem-Solving", level: 3, fill: "#9C27B0", icon: FaPuzzlePiece },
];

const chartConfig = {
    Coding: { label: "Coding" },
    "Gym Workouts": { label: "Gym Workouts" },
    "Drinking Coffee": { label: "Drinking Coffee" },
    Walking: { label: "Walking" },
    "Problem-Solving": { label: "Problem-Solving" },
} satisfies ChartConfig;

const levels = ["Newbie", "Geek", "Ninja", "Jedi"];

interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        const { hobby, level } = payload[0].payload;
        return (
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 text-center">
                <p
                    className="font-bold"
                    style={{
                        color: chartData.find((item) => item.hobby === hobby)?.fill,
                    }}
                >
                    {hobby}
                </p>
                <p>{levels[level - 1]}</p> {/* Displaying the level name */}
            </div>
        );
    }

    return null;
};

export function HobbyChart() {
    return (
        <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
            <CardHeader className="text-white"></CardHeader>
            <CardContent className="p-6">
                <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <CartesianGrid
                                vertical={false}
                                strokeDasharray="3 3"
                                stroke="#ccc"
                            />
                            <XAxis
                                dataKey="hobby"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tick={{ fill: "#666", fontSize: 12 }}
                                tickFormatter={(value) =>
                                    chartConfig[value as keyof typeof chartConfig]?.label
                                }
                            />
                            <YAxis
                                dataKey="level"
                                type="number"
                                domain={[0, levels.length]} // Adjust domain based on levels
                                ticks={[1, 2, 3, 4]} // Corresponding to Newbie, Geek, Ninja, Jedi
                                tickFormatter={(value) => levels[value - 1]} // Map values to levels
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} /> {/* Use custom tooltip */}
                            <Bar
                                dataKey="level"
                                radius={[8, 8, 0, 0]}
                                // @ts-ignore
                                fill={(data) => data.fill}
                                strokeWidth={2}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
            <CardFooter className="bg-gray-100 dark:bg-gray-700 p-4 flex flex-wrap justify-center gap-4">
                {chartData.map((item) => (
                    <div key={item.hobby} className="flex items-center">
                        <item.icon className="mr-2 text-xl" style={{ color: item.fill }} />
                        <span className="text-sm font-medium">{item.hobby}</span>
                    </div>
                ))}
            </CardFooter>
        </Card>
    );
}
