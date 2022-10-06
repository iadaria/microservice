
export type Response<T = any> = {
	ok: boolean;
	error?: string;
	data?: T;
}

export function DoneResponse<T>(data: T): Response<T> {
	return { ok: true, data }
}

export function FailResponse<T = any>(error: string, data?: T): Response<T> {
	return { ok: false, error, data };
}