import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMReserve, PMReserve } from "@/PMs/Reserve/ReservePM";
import { getReserveModel } from "@/Models/Reserve/ReserveModel";
import ReserveView from "@/Views/Reserve/ReserveView";
import { router } from "expo-router";

export default function ReservePage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMReserve>(default_PMReserve);
	const model = useMemo(() => {
		const model = getReserveModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <ReserveView pm={pm} />;
}