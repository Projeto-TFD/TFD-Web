export default function randomColors(name: string, isText: boolean = false) {
  const colors = isText
    ? ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500"]
    : ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];

  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return colors[hash % colors.length];
}
