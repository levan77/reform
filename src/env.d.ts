/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type RuntimeEnv = import('./lib/runtime').RuntimeEnv;

declare namespace App {
  interface Locals {
    runtime: {
      env: RuntimeEnv;
    };
  }
}
