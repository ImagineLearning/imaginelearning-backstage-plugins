import { createApiRef } from '@backstage/core-plugin-api';
import { AwsEcrListImagesRequest, AwsEcrListImagesResponse, AwsEcrListScanResultsRequest, AwsEcrListScanResultsResponse } from '@blakeromano/plugin-aws-ecr-scan-backend';

/** @public */
export const awsEcrScanApiRef = createApiRef<AwsEcrScanApi>({
  id: 'plugin.aws-ecr-scan.service',
});

/** @public */
export interface AwsEcrScanApi {
  listEcrImages(
    req: AwsEcrListImagesRequest,
  ): Promise<AwsEcrListImagesResponse>;
  listScanResults(
    req: AwsEcrListScanResultsRequest,
  ): Promise<AwsEcrListScanResultsResponse>;
}