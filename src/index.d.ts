import { dkFormOptions, dkItemOptions,dkFormRef } from "@/components/dk-components/types";
declare global {
	type FormOptions = dkFormOptions;
	type ItemOptions = dkItemOptions;
    type FormRef = dkFormRef
}
export {};
