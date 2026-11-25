import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"

export interface RuneServerProps extends cdk.StackProps {
  serviceName: string
  stage: string
}

export class RuneServer extends cdk.Stack {
  constructor(scope: Construct, id: string, props: RuneServerProps) {
    super(scope, id, props)
    // Add your infra here...
  }
}
