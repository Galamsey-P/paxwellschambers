import { LogoVariant } from "@/components/navigation/logo/index.types";

export type NavigationContextType = {
    isTransparent: boolean;
    logoVariant: LogoVariant;
    setNavigationState: (isTransparent: boolean, logoVariant: LogoVariant) => void;
};