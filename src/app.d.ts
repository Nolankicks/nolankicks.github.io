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
            slug: string,
            title: string,
            date: string,
            description: string,
            github?: string,
            sbox?: string,
            image?: string,
            lang?: string,
            redirect?: string,
            published?: boolean,
        }

        interface BlogPost {
            slug: string,
            title: string,
            date: string,
            description?: string,
            published?: boolean,
            edited?: string,
        }

        interface NewsPost {
            Id: string;
            Url: string;
            Created: string;
            Title: string;
            Summary: string;
            Media: string;
            Package: string;
            Sections: Sections[];
        }
        
        interface Sections {
            Id: string;
            Title: string;
            Contents: string;
        }
	}
}

export {};
