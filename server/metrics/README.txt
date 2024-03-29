 
# Para configurar o Fleet no Elastic Stack

## Para iniciar os containers do Elastic Stack execute
docker compose -f  dc-metrics-dev.yml --env-file ./smart-security-envs/.env.dev up --build -d

## Acesse o Kibana
https://localhost:5601

Login: elastic
Senha: changeme

# Siga para a para a aba Fleet do menu lateral: Managment > Fleet > Setting > Outputs > Actions > Edit:

https://localhost:5601/app/fleet/settings/outputs/fleet-default-output

Altere
Hosts: https://es01:9200

## Para gerar a fingerprint use os seguintes comandos
docker exec  -it -u root es01 openssl x509 -fingerprint -sha256 -noout -in /usr/share/elasticsearch/config/certs/ca/ca.crt  | awk -F"=" "{ print $2 }" | sed s/://g
# Exemplo:
    SHA256 Fingerprint=CBB8561D739E2C71E8ED38BEE2EB7BD48C460AA5B8EBB77428F06F10F7176D6F
# Copie o codigo 'CBB8561D739E2C71E8ED38BEE2EB7BD48C460AA5B8EBB77428F06F10F7176D6F'


# Para printar o certificado no console
docker exec  -it -u root es01 cat /usr/share/elasticsearch/config/certs/ca/ca.crt

# No campo Advanced YAML configuration cole o certificado

docker exec  -it -u root es01 cat /usr/share/elasticsearch/config/certs/ca/ca.crt
# Exemplo:
ssl:
    certificate_authorities:
        - |
            -----BEGIN CERTIFICATE-----
            MIIDSjCCAjKgAwIBAgIVAPYmHwgNUsfQmqBFwVEJp88J7JQ9MA0GCSqGSIb3DQEB
            CwUAMDQxMjAwBgNVBAMTKUVsYXN0aWMgQ2VydGlmaWNhdGUgVG9vbCBBdXRvZ2Vu
            ZXJhdGVkIENBMB4XDTI0MDEyNTIxMzcwOFoXDTI3MDEyNDIxMzcwOFowNDEyMDAG
            A1UEAxMpRWxhc3RpYyBDZXJ0aWZpY2F0ZSBUb29sIEF1dG9nZW5lcmF0ZWQgQ0Ew
            ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDPR0ZSIA3nrqiUCE6bJ/h8
            a4AQEFFq0o2JxSNQKBbg98KAi9YkfUHYbYd3/lftB17mZVM+iNS6tvEeH7GNJ1FF
            exrgZz90rySAPW+YZSoNPP++8zGTpV2n/WZy0nPLXOS8Ox72t0EodMeruKGcn7iR
            JXF0nyRljlNQxUiL2b/JKkmtAR/NovyYGlF8S1dJVkMl2bdN1OjgGjCmDwjiJewa
            fJLYsIKI9Npus/WrL7H2AyzQKDH0fwVFiQMFRPm5Vc11afCkMPU9L8QZWKNon5O7
            bGHDlLAEuGSS9r0ou1ewYxfTs8YK3zFya5E0bSuApJmzS8J24nyXrL84eLd+Y4mv
            AgMBAAGjUzBRMB0GA1UdDgQWBBTM+E8wVd6+SrY/Yb3R4IdUQnHA2DAfBgNVHSME
            GDAWgBTM+E8wVd6+SrY/Yb3R4IdUQnHA2DAPBgNVHRMBAf8EBTADAQH/MA0GCSqG
            SIb3DQEBCwUAA4IBAQA8aNd9A0kLJj/TC0Dai4/ATwByM0UZeyVWiu/ueJUF1DoP
            HJXQFl9EPf65+NTInJlx4AcPtkdmPTvdNljeoiIBpZnIXhQT76rpsPVCavR9Wgqi
            YZr6fb2UT13Xfj2PY+9F+MKw3grb8ACWcfN7NqahRIZExgp0kcumZItVUjCv8EqH
            bZNtaOE8BSWasl7FML4IEDYhJgAcCbNa307jjan6mYC/39NFaY7Knn0hD0HtUvef
            RLeEFjpep+Gsh5Zzycb0cIXDJ7+fEyWAH45C6wgNDuwAgNEiSSKa6RXJ2aJwd7Cg
            HvP40AGK28H5jynIhYuNLEHfBk8ugYEFjKhK8MRL
            -----END CERTIFICATE-----

# Clique em Save and deploy

# Para confirmar a configuração volte a tab Agents e verifique as colunas CPU e Memory(pode demorar alguns momentos para aparecer)
