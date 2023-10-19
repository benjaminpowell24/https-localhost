# Use Https on localhost

mkcert specializes in generating TLS certificate that are compliant with what the browser considers as valid certificates.

## Setting up

1. Install mkcert(only once).

On mac run this in your terminal:

    ```bash
    brew install mkcert
    ```

    ```bash
    brew install nss  #If you use firefox
    ```

2. Add mkcert to your local root CAs.

Run the following command in your terminal:

    ```bash
        mkcert -install
    ```

3. Generate a certificate for your site signed by mkcert.
In your terminal, navigate to your site's root directory and run this command

    ```bash
        mkcert localhost
    ```
    If you're using a custom site name like somesite.example

    ```bash
        mkcert somesite.example
    ```

    This will generate a certificate and key in your root directory. Replace the '{PATH/TO/CERTIFICATE...}.pem' with the path to
    your key and certificate in the index.js file.

## Starting the server

4. Install packages
In your site's root directory run this 

    ```bash
        npm install
    ```

5. Start the server at https://localhost:4000
After installing the packages in your site's root directory run this

    ```bash
        npm start
    ```

