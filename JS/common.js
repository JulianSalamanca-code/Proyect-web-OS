const baseDatos = {
  CMD: {
    "Archivos del sistema": [
      {
        desc: "Escanea y repara archivos del sistema dañados.",
        sintaxis: "sfc /scannow",
        ejemplo: `Beginning system scan. This process will take some time.
        Beginning verification phase of system scan.
        Verification 100% complete.
        Windows Resource Protection did not find any integrity violations.`
      }
    ],

    "Procesador y Sistema": [
      {
        desc: "Muestra información detallada del sistema (CPU, memoria, parches instalados).",
        sintaxis: "systeminfo",
        ejemplo: `Host Name:                 DESKTOP-AB123CD
                  OS Name:                   Microsoft Windows 11 Pro
                  OS Version:                10.0.22631 N/A Build 22631
                  System Manufacturer:       Dell Inc.
                  System Model:              XPS 15 9500
                  Processor(s):              1 Processor(s) Installed.
                                            [01]: Intel64 Family 6 Model 165 Stepping 2 GenuineIntel ~2600 Mhz
                  Total Physical Memory:     16,384 MB
                  Available Physical Memory: 8,245 MB
                  BIOS Version:              Dell Inc. 1.15.0`
      },
      {
        desc: "Genera un informe completo de rendimiento y diagnóstico del sistema.",
        sintaxis: "perfmon/report",
        ejemplo: `Generating report...
                  Collecting data for 60 seconds...
                  Analyzing results...

                  Performance Monitor Report

                  Warnings:
                  - High CPU usage detected.
                  - 1 device driver is outdated.

                  Information:
                  - System responsiveness: Good
                  - Disk I/O: Normal`
      }
    ],

    "Disco duro": [
      {
        desc: "Revisa y repara errores en el disco duro.",
        sintaxis: "chkdsk C: /f /r",
        ejemplo: `The type of the file system is NTFS.
                  Volume label is Windows.

                  Stage 1: Examining basic file system structure...
                  File verification completed.
                  Stage 2: Examining file name linkage...
                  Stage 3: Examining security descriptors...

                  Windows has scanned the file system and found no problems.
                  No further action is required.`
      },
      {
        desc: "Comprueba si el volumen está marcado como 'sucio' (necesita reparación).",
        sintaxis: "fsutil dirty query C:",
        ejemplo: `Volume - C: is NOT Dirty
                  Volume - C: is Dirty`
      }
    ],

    "Memoria RAM": [
      {
        desc: "Abre el Diagnóstico de memoria de Windows (requiere reinicio).",
        sintaxis: "mdsched.exe",
        ejemplo: `Windows Memory Diagnostic

                  Restart now and check for problems (recommended)
                  Check for problems the next time I start my computer`
      }
    ]
  },

  PowerShell: {
    "Programas instalados y actualizaciones": [
      {
        desc: "Lista programas instalados.",
        sintaxis: "Get-WmiObject Win32_Product | Select Name, Version",
        ejemplo: `Name                         Version
                  ----                         -------
                  Google Chrome                121.0.0
                  Microsoft Office 365         16.0.0`
      },
      {
        desc: "Lista paquetes y aplicaciones instaladas.",
        sintaxis: "Get-Package",
        ejemplo: `Name            Version     Source
                  ----            -------     ------
                  7zip            19.00       Programs
                  Git             2.44.0      Programs`
      },
      {
        desc: "Revisa el historial de actualizaciones de Windows.",
        sintaxis: "Get-WindowsUpdateLog",
        ejemplo: `Windows Update log successfully written to C:\\Users\\Admin\\Desktop\\WindowsUpdate.log`
      }
    ],

    "Procesador y sistema": [
      {
        desc: "Información detallada del CPU.",
        sintaxis: "Get-WmiObject Win32_Processor | Select Name, NumberOfCores, NumberOfLogicalProcessors",
        ejemplo: `Name                               : Intel(R) Core(TM) i7-10750H CPU @ 2.60GHz
                  NumberOfCores                      : 6
                  NumberOfLogicalProcessors          : 12
                  MaxClockSpeed                      : 2600`
      },
      {
        desc: "Muestra datos completos del sistema operativo y hardware.",
        sintaxis: "Get-ComputerInfo",
        ejemplo: `WindowsProductName      : Windows 11 Pro
                  WindowsVersion          : 22H2
                  CsName                  : DESKTOP-AB123CD
                  CsTotalPhysicalMemory   : 17179869184
                  CsProcessorCount        : 1`
      }
    ],

    "Memoria RAM": [
      {
        desc: "Muestra la memoria disponible en tiempo real.",
        sintaxis: "Get-Counter '\\Memory\\Available MBytes'",
        ejemplo: `Timestamp                 CounterSamples
---------                 --------------
01/03/2026 10:15:23 AM    \\DESKTOP\\memory\\available mbytes:
                          8245`
      }
    ]
  }
};


// ============================
// LÓGICA DE INTERFAZ
// ============================

const btnCmd = document.getElementById('btn-cmd');
const btnPs = document.getElementById('btn-ps');
const contenedorCat = document.getElementById('contenedor-categorias');
const ficha = document.getElementById('detalle-comando');

btnCmd.addEventListener('click', () => generarMenuCategorias("CMD"));
btnPs.addEventListener('click', () => generarMenuCategorias("PowerShell"));


function generarMenuCategorias(terminal) {
  contenedorCat.innerHTML = `<h3>Opciones para ${terminal}:</h3>`;
  ficha.classList.add("oculto");

  const categorias = Object.keys(baseDatos[terminal]);

  categorias.forEach(nombreCat => {
    const boton = document.createElement('button');
    boton.textContent = nombreCat;
    boton.className = 'btn-categoria';

    boton.addEventListener('click', () =>
      generarComandos(terminal, nombreCat)
    );

    contenedorCat.appendChild(boton);
  });
}


function generarComandos(terminal, categoria) {
  contenedorCat.innerHTML = `<h3>${categoria} - ${terminal}</h3>`;

  baseDatos[terminal][categoria].forEach((comando, index) => {
    const boton = document.createElement('button');
    boton.textContent = "Comando " + (index + 1);
    boton.className = 'btn-categoria';

    boton.addEventListener('click', () =>
      mostrarFicha(comando, categoria, terminal)
    );

    contenedorCat.appendChild(boton);
  });
}


function mostrarFicha(info, categoria, terminal) {
  document.getElementById('titulo-opcion').textContent =
    `${categoria} en ${terminal}`;

  document.getElementById('desc').textContent = info.desc;
  document.getElementById('sintaxis').textContent = info.sintaxis;

  // MOSTRAR EJEMPLO EN BLOQUE RESPETANDO SALTOS
  const ejemploElemento = document.getElementById('ejemplo');
  ejemploElemento.textContent = info.ejemplo || "";

  ficha.classList.remove("oculto");
}