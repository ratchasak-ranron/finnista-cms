module.exports = ({ env }) => (
    {
        upload: {
            config: {
                provider: 'aws-s3',
                providerOptions: {
                    forcePathStyle: false,
                    rootPath: env('AWS_ROOT_PATH'),
                    endpoint: env('AWS_ENDPOINT'),
                    region: env('AWS_REGION'),
                    credentials: {
                        accessKeyId: env('AWS_ACCESS_KEY_ID'),
                        secretAccessKey: env('AWS_ACCESS_SECRET'),
                    },
                    params: {
                        ACL: env('AWS_ACL', 'public-read'),
                        signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                        Bucket: env('AWS_BUCKET'),
                    },
                },
                actionOptions: {
                    upload: {},
                    uploadStream: {},
                    delete: {},
                },
            },
        },
    }
);
