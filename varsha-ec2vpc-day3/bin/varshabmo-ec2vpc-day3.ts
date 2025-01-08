#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VarshabmoEc2VpcDay3Stack } from '../lib/varshabmo-ec2vpc-day3-stack';

const app = new cdk.App();
new VarshabmoEc2VpcDay3Stack(app, 'VarshabmoEc2VpcDay3Stack', {
  
  env: { account: '992382386705', region: 'us-east-1' },
});