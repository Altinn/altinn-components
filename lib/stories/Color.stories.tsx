import { ReactNode } from "react";
import colors from "../css/tokens/design-tokens-build/semantic/color.json";

const meta = {
    title: "Demo/Color",
    tags: ["beta"],
    parameters: {
        layout: "fullscreen",
    },
    args: {},
};

export default meta;

interface DesignToken {
    $type?: "color" | string;
    $value: string;
    $description?: string;
}

type TokenGroup = Record<string, DesignToken>;

type SemanticCategoryMap = Record<string, TokenGroup>;

export interface DesignTokensSchema {
    color: SemanticCategoryMap;
}

interface ColorTokenProps {
    name: string;
    data?: DesignToken;
    children?: ReactNode
}

const ColorSwatch = ({ name, data, children }: ColorTokenProps) => {

    const style = {
        flex: 1,
        backgroundColor: `var(--ds-color-${name})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1em'
    }

    return (
        <div style={style}>{children || data?.$value}</div>
    )
}

const ColorGroup = ({ colorName, tokens }: { colorName: string; tokens: TokenGroup }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <ColorSwatch name={colorName}>
                {colorName}
            </ColorSwatch>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {Object.entries(tokens).map(([tokenName, tokenData], index: number) => (
                    <ColorSwatch
                        key={tokenName}
                        name={`${colorName}-${tokenName}`}
                        data={tokenData}
                    >{index + 1}</ColorSwatch>
                ))}
            </div>
        </div>
    )
}

export const Default = () => {
    const theme = colors as unknown as DesignTokensSchema;

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>

            {Object.entries(theme.color).map(([colorName, tokens]) => (
                <ColorGroup
                    key={colorName}
                    colorName={colorName}
                    tokens={tokens}
                />
            ))}
        </div>
    );
};