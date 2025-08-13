This Node.js script sets up a basic HTTP server using the built-in http, fs (file system), and path modules. The primary goal of the server is to handle simple routing and serve corresponding static HTML files
from a folder named public. First, the script defines the path to the public directory using path.join(__dirname, 'public'), which ensures it works correctly regardless of the operating system. When the server 
receives an HTTP request, it checks the requested URL (req.url) and maps it to a specific HTML file: if the request is for the root path (/), it serves home.html; if the path is /about, it serves about.html; 
and if it's /contact, it serves contact.html. These files are assumed to be located inside the public folder.
After determining the file path, the server uses fs.readFile() to read the content of the corresponding file from the disk. If the file is found and successfully read, it sends the content back to the client with
a status code of 200 and a Content-Type header of text/html, indicating that the response contains HTML content. If there's an error reading the file (e.g., the file doesn't exist or there's a permission issue), 
the server simply responds with a generic message: "Server Error". This means the server currently doesn't handle 404 (Not Found) errors specifically — it treats all read errors the same way.
Finally, the server listens for incoming connections on port 3000, and once it starts, it logs the message "Server is running on port 3000" to the console. This kind of server is a simple example of how Node.js 
can be used to build web servers from scratch, without relying on external frameworks like Express. While it's functional, it could be improved by adding more robust error handling, support for additional 
content types (like CSS, JavaScript, images), and dynamic routing capabilities.
