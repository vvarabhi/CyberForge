@echo off
title CyberForge Launcher
echo.
echo  =======================================
echo     CyberForge - Pentesting Tracker
echo  =======================================
echo.
echo  Starting CyberForge...
echo.

:: Check if Node.js is available for http-server
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo  [!] Node.js not found. Opening directly in browser...
    start "" "%~dp0index.html"
    goto end
)

:: Kill any existing http-server on port 8080
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080 ^| findstr LISTENING 2^>nul') do (
    taskkill /PID %%a /F >nul 2>nul
)

:: Start http-server in background
start /min "" cmd /c "cd /d "%~dp0" && npx -y http-server . -p 8080 -c-1 --cors -s"

:: Wait for server to start
echo  Waiting for server...
timeout /t 3 /nobreak >nul

:: Open in default browser
start "" "http://localhost:8080"

echo.
echo  CyberForge is running at http://localhost:8080
echo  Press any key to stop the server...
echo.
pause >nul

:: Kill http-server
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080 ^| findstr LISTENING 2^>nul') do (
    taskkill /PID %%a /F >nul 2>nul
)

echo  CyberForge stopped. Goodbye!

:end
