// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

        interface Project {
            title: string,
            description: string,
            date: string,
            link: string?,
            image: string?
        }
	}
}

export {};
