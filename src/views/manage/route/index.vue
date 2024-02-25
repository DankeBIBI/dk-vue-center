<script setup lang="ts">
import { dkTable } from "@/components/dk-components";
import config from "./config";
</script>
<template>
	<div class="">
		<dkTable :table-options="config" />
	</div>
</template>
<style lang="scss" scoped></style>
