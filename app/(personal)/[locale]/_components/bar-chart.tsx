import { useTranslations } from "next-intl";
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
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
                        color: payload[0].payload.fill,
                    }}
                >
                    {hobby}
                </p>
                <p>{levels[level - 1]}</p>
            </div>
        );
    }

    return null;
};

export function HobbyChart() {
    const t = useTranslations("Home");

    const chartData = [
        { hobby: t("hobbyOne"), level: 3, fill: "#4CAF50", icon: FaCode },
        { hobby: t("hobbyTwo"), level: 2, fill: "#FF5722", icon: FaDumbbell },
        { hobby: t("hobbyThree"), level: 4, fill: "#2196F3", icon: FaCoffee },
        { hobby: t("hobbyFour"), level: 1, fill: "#FFC107", icon: FaWalking },
        { hobby: t("hobbyFive"), level: 3, fill: "#9C27B0", icon: FaPuzzlePiece },
    ];

    const chartConfig = {
        [t("hobbyOne")]: { label: t("hobbyOne") },
        [t("hobbyTwo")]: { label: t("hobbyTwo") },
        [t("hobbyThree")]: { label: t("hobbyThree")},
        [t("hobbyFour")]: { label: t("hobbyFour") },
        [t("hobbyFive")]: { label: t("hobbyFive") },
    } as ChartConfig;

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
                                tickFormatter={(value) => chartConfig[value]?.label || value}
                            />
                            <YAxis
                                dataKey="level"
                                type="number"
                                domain={[0, levels.length]}
                                ticks={[1, 2, 3, 4]}
                                tickFormatter={(value) => levels[value - 1]}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar
    dataKey="level"
    radius={[8, 8, 0, 0]}
    strokeWidth={2}
>
    {chartData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.fill} />
    ))}
</Bar>

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
