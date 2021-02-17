# Secure Expresss Back-end

## Environment

- Date: 2021 February

- AWS EC2: Ubuntu 20.04.2 LTS

## Initialization

1. Install ruby

   ```bash
   sudo apt update
   sudo apt install ruby
   ```

2. Download the installation script

   `wget https://`bucket-name`.s3.`region-identifier`.amazonaws.com/latest/install`

   **Note**: [Resource kit buckeet names by Region](https://docs.aws.amazon.com/codedeploy/latest/userguide/resource-kit.html#resource-kit-bucket-names)

   **Note**: In case `wget` is not installed by default, run the command
   `sudo apt install wget`

3. Install the CodeDeploy

   **Note**: Using `Ubuntu 20.04.2` would need to reboot the system before running the following commands

   ```bash
   sudo chmod +x ./install
   sudo ./install auto
   ```

   In case of encounting the known bugs on `Ubuntu 20.04.2`, log the output and contact the AWS

   `sudo ./install auto > /tmp/logfile`

4. Verify the installation

    ```bash
    sudo service codedeploy-agent status

    // Start the service
    sudo service codedeploy-agent start
    ```
