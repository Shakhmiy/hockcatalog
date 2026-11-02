import * as React from "react";

function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={`rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm ${className}`} {...props} />;
}
function CardHeader({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={`flex flex-col gap-1.5 p-5 ${className}`} {...props} />;
}
function CardTitle({ className = "", ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={`font-semibold leading-tight tracking-tight ${className}`} {...props} />;
}
function CardContent({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={`px-5 pb-5 ${className}`} {...props} />;
}
export { Card, CardHeader, CardTitle, CardContent };
