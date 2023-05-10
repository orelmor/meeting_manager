class Config {
    public meetingsUrl = "http://localhost:3001/api/meetings/";
    public groupsUrl = "http://localhost:3001/api/groups/";
}

const appConfig = new Config(); // Singleton

export default appConfig;
