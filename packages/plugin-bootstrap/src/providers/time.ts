import { IAgentRuntime, Memory, Provider, State } from "@ai16z/eliza";

const timeProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        const currentDate = new Date();

        // Get UTC time since bots will be communicating with users around the global
        const options = {
            timeZone: "UTC",
            dateStyle: "full" as "full",
            timeStyle: "long" as "long",
        };
        const humanReadable = new Intl.DateTimeFormat("en-US", options).format(
            currentDate
        );
        return `The current date and time is ${humanReadable}. Please use this as your reference for any time-based operations or responses.`;
    },
};
export { timeProvider };
