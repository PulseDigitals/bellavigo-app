# start-prod.ps1
$port = 3000

# Kill any processes on the port
$pids = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
if ($pids) {
    foreach ($p in $pids) {
        try {
            Write-Host "Stopping process ${p} on port $port"
            Stop-Process -Id $p -Force -ErrorAction Stop
        } catch {
            Write-Warning "Could not stop process ${p}: $_"
        }
    }
} else {
    Write-Host "No processes on port $port"
}

# Build the app
Write-Host "Building the app..."
try {
    npm run build
} catch {
    Write-Error "Failed to build the app: $_"
    exit 1
}

# Start production server
Write-Host "Starting production server on port $port..."
try {
    npx next start -p $port
} catch {
    Write-Error "Failed to start server: $_"
    exit 1
}
