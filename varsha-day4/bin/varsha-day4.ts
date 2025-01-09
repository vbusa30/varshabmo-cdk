#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VarshaDay4Stack } from '../lib/varsha-day4-stack';
import { VarshaDay4Ec2all } from '../lib/varsha-day4-ec2all';

const app = new cdk.App();
new VarshaDay4Stack(app, 'VarshaDay4Stack', {
  
  env: { account: '992382386705', region: 'us-east-1' },
});

new VarshaDay4Ec2all(app, 'VarshaDay4Ec2all', {
  
  env: { account: '992382386705', region: 'us-east-1' },
});