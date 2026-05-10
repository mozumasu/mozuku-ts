{
  description = "mozuku-ts development environment (TypeScript / JavaScript with Node.js and Bun)";

  inputs = {
    # Pin to a stable nixpkgs channel so every collaborator gets the same toolchain.
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            allowUnfree = true;
          };
        };
      in
      {
        devShells.default = pkgs.mkShell {
          name = "mozuku-ts";

          packages = with pkgs; [
            # ── JavaScript / TypeScript runtimes ────────────────────────────
            nodejs_22 # Node.js 22 LTS (Active LTS, "stable")
            bun # Bun runtime / package manager / bundler

            # ── TypeScript compiler (stable 5.x) ────────────────────────────
            typescript

            # ── Package managers (npm ships with nodejs) ────────────────────
            pnpm
            yarn

            # ── Editor language servers ─────────────────────────────────────
            nodePackages.typescript-language-server
            vscode-langservers-extracted # html / css / json / eslint LSPs

            # ── Linters & formatters ────────────────────────────────────────
            biome # fast linter & formatter (Rust)
            nodePackages.prettier
            nodePackages.eslint

            # ── Misc utilities frequently used by JS/TS toolchains ──────────
            jq
            git
          ];

          shellHook = ''
            echo ""
            echo "mozuku-ts development shell"
            echo "==========================="
            echo "system:     ${system}"
            echo "node:       $(node --version)"
            echo "bun:        $(bun --version)"
            echo "tsc:        $(tsc --version)"
            echo "pnpm:       $(pnpm --version)"
            echo "yarn:       $(yarn --version)"
            echo "biome:      $(biome --version)"
            echo "prettier:   $(prettier --version)"
            echo "eslint:     $(eslint --version)"
            echo ""
            echo "Run 'node', 'bun', or 'tsc' to get started."
            echo ""
          '';
        };

        # Allow `nix fmt` to format the flake itself.
        formatter = pkgs.nixfmt-rfc-style;
      }
    );
}
