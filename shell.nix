# this is for nix users and won't affect you if not on Nix
let
  pkgs = import <nixpkgs> {};
in
  (pkgs.buildFHSUserEnv {
    name = "dev-env";
    targetPkgs = p:
      with p; [
        nodejs-16_x
        coreutils
        python3
        gcc
        systemd
      ];
    runScript = "bash";
  })
  .env
