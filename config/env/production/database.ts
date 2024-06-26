export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'database'),
			user: env('DATABASE_USERNAME', 'username'),
			password: env('DATABASE_PASSWORD', 'password'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
