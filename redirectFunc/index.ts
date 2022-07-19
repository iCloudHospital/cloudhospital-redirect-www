import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const redirectFunc: AzureFunction = async (
  context: Context,
  req: HttpRequest
) => {
  const destinationUrl = process.env.Destination;

  context.log(`Redirect to ${destinationUrl}`);

  var res = {
    status: 302,
    headers: {
      Location: destinationUrl,
    },
    body: `Redirecting ...`,
  };

  context.res = res;
};

export default redirectFunc;
