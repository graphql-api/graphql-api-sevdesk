# @graphql-api/sevdesk

### DataSource
```
import { SevdeskDataSource } from '@graphql-api/sevdesk'

const sevdeskToken = ...

const server = new ApolloServer({
  ...
  dataSources: () => ({
    sevdesk: new SevdeskDataSource(
      sevdeskToken // apply directly or leave empty if you set SEVDESK_TOKEN in envirment variables
    )
  })
})
```
