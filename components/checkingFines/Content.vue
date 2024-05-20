<script setup lang="ts">
import * as Yup from 'yup';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

interface ICarFormState {
	carNumber: string;
	carRegion: string;
	carRegistration: string;
}

const showVideoPlayer = ref<boolean>(false);

const carFormRef = ref();

const carForm = ref<ICarFormState>({
	carNumber: '',
	carRegion: '',
	carRegistration: '',
});

const onSubmit = (values: ICarFormState) => {
	carForm.value = values;
	carFormRef.value.resetForm();
	toast.success('Данные были отправлены!', { autoClose: 3000 });
};

const schema = Yup.object().shape({
	carNumber: Yup.string().required(),
	carRegion: Yup.string().required(),
	carRegistration: Yup.string().required(),
});
</script>

<template>
	<div class="content-root">
		<h1 class="content__title">
			Проверьте штрафы и зарегистрируйтесь в 1 клик
		</h1>

		<VeeForm
			ref="carFormRef"
			class="form-checking-fines"
			:validation-schema="schema"
			@submit="(values) => onSubmit(values as ICarFormState)"
		>
			<div class="car-number">
				<UiTextField
					:value="carForm.carNumber"
					name="carNumber"
					type="text"
					label="Номер автомобиля"
				/>

				<UiTextField
					:value="carForm.carRegion"
					name="carRegion"
					type="text"
					label="Регион"
				/>
			</div>

			<UiTextField
				:value="carForm.carRegistration"
				name="carRegistration"
				type="text"
				label="Свидетельство о регистрации ТС"
			/>

			<div class="actions">
				<UiButton type="submit">
					Проверить штрафы
					<NuxtImg src="/assets/icons/arrowRight.svg" width="14" />
				</UiButton>

				<UiButton variant="outlined" @click.prevent="showVideoPlayer = true">
					<NuxtImg src="/assets/icons/youtube.svg" width="30" />
					О сервисе

					<UiModal
						v-if="showVideoPlayer"
						@close-modal="showVideoPlayer = false"
					>
						<iframe
							class="video-player"
							src="https://www.youtube.com/embed/9YfVFQRXPAc?si=HEpYoILH0hysLPAQ"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
							autoplay
						></iframe>
					</UiModal>
				</UiButton>
			</div>

			<div class="hint">
				Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
				персональных данных и принимаете оферту
			</div>
		</VeeForm>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/breakpoints.scss';

.content-root {
	padding-right: 20px;
	& > .content__title {
		margin: 0 0 25px;

		font-size: 41px;
		font-weight: 700;
		line-height: 120%;
	}

	& > .form-checking-fines {
		& > .car-number {
			display: grid;
			grid-template-columns: 2fr 1fr;
			gap: 30px;
		}

		& > .actions {
			display: flex;
			gap: 21px;
		}

		& > .hint {
			margin-top: 16px;

			color: rgb(var(--Color-Secondary));
			font-size: 13px;
			font-weight: 400;
			line-height: 120%;
		}
	}
}

.video-player {
	width: 960px;
	height: 532px;
}

@media (max-width: $display-lg) {
	.video-player {
		width: 90%;
	}
}

@media (max-width: $display-md) {
	.content-root {
		padding-right: 0;

		& > .content__title {
			text-align: center;
		}
	}
}
</style>
