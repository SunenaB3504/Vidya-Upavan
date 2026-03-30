Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('C:\Users\Admin\Nia\Std V\Marathi-Sanskrit\docs\Vidya_Vatika_Business_Plan_2025.docx')
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$reader = New-Object System.IO.StreamReader($entry.Open())
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
$text = $xml -replace '<[^>]+>', ''
$text | Out-File -FilePath 'C:\Users\Admin\Nia\Std V\Marathi-Sanskrit\docs\Vidya_Vatika_Business_Plan_2025.txt' -Encoding UTF8
Write-Host "DOCX extraction complete"
