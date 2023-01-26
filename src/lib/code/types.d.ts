export type FocusBlock = {
    lines: string;
    scrollLine?: number;
    text?: string;
};

export type UpdatedFocusBlock = {
    lines: string;
    scrollLine?: number;
    text?: string;
    highlightLines?: number[];
}