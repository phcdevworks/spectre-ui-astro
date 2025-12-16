export type InputState = "default" | "error" | "success";
export type InputSize = "sm" | "md" | "lg";
export interface InputRecipeOptions {
    state?: InputState;
    size?: InputSize;
    fullWidth?: boolean;
}
export declare function getInputClasses(opts?: InputRecipeOptions): string;
//# sourceMappingURL=input.d.ts.map