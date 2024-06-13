import { fail } from '@sveltejs/kit';

export const load = (({ cookies }) => {
    return {}
});

export const actions = {
    /**
     * Modify game state in reaction to a keypress. If client-side JavaScript
     * is available, this will happen in the browser instead of here
     */
    update: async ({ request, cookies }) => {
       console.log("server action")
    },
};
