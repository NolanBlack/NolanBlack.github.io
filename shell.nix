# shell.nix
let
    pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/cf8cc1201be8bc71b7cbbbdaf349b22f4f99c7ae.tar.gz") {};
in pkgs.mkShell {
    buildInputs = [
            # pkgs.gdb
    ];
    packages = [
        (pkgs.python3.withPackages (python-pkgs: [
                # python-pkgs.click
        ]))
    ];
    nativeBuildInputs = with pkgs; [
        pkg-config
        pre-commit
    ];
    shellHook = "
        export FONTCONFIG_FILE=${pkgs.fontconfig.out}/etc/fonts/fonts.conf
        export FONTCONFIG_PATH=${pkgs.fontconfig.out}/etc/fonts/
    ";
}
