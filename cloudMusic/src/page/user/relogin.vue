<template>
  <div class="box">
    <dl>
      <dt class="logo-box"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADICAMAAAB1RDWSAAAAM1BMVEUAAADvMDDpNjTqNTTrNDTpNTToNTTpNTXpNTXoNjTvMDDqNTXpNjTpNTTpNjPoNDTpNjUqHloqAAAAEHRSTlMAEIBgQPDAoNDgIDCwkFBwW59+QAAACABJREFUeNrcm9t2rCAMQBMg3ATl/7/2rPMwq+1QMRBFp/u1U7u2IRcKA3toX55J0NCDDuW5kEJgYp4aj864RFuej1/gEE3lI1DQBlP5FHyEBsuTM/0dMo1U/5CV9ULDDrp8GvmviJTi/opIKe6viPxSjZfyqbylffywqvUdA9/Ap09aLQjhC1c+Gf8lspa7CJbOzHqkMh+rTHyNFtqFIuI1GacyG7vie+3MJF9fpkwmR/gFVILAbPAfW6aSIuyASlC/pqd7MNAgeknShzKRhNAmjwZlcpYoaCCb/+Y2RQ0MFhozwdJgnohcBbbSYLqIoC1M7IoOuAy93nmVy0IHacCkzCJCB/HBJgq6cLeb2KwSiUMCoO81CRr3ziw89GHuNLEGXmCuC1cf6j6ToJurQ0Ef/jaTjPCTzOiKuFlrnUaoWEo3cM25TDVim9ZJjat+am8yyTvVp22yVjkm6/HXHWMcmCDt1QtY6BYTi/A71DZJ1RLVr2CNzcLX9e7ynY3TMCgv1WZ+lglpZm9TzHGEfCl3mNACu7imCZYG8008MseN2sQ8yiQ1RJDaJtuTTBzsg/7d+sEmXSLFPnd1aYZIwyQ+xqQlsgTGLj48xKQlslJhmLhnmOjuPRLBG/oRJg0R3JvHqw8+wUSNXOGBd9L9Jm5o912n0+0mbuwYByrCzSaeUbN4/+8y95p4HDyMMk31+SYUGW2dawKowm0mhnd4w//NRdlbTLbxm7kG9sDV0WyTtCcivkC+ZD/ThLCxzxVfHl/cPBMzJmIN8EAV5phkpkjtwUf7CSYBB0TCCp1sdLnJ2i8SNPSD+WIT239gkxCGWOylJrG3/JKGYfKFJq73MNBGELBSv4kgJEgtcxmLv8hEdZ4FZpCC6RoT7Mt2DSfgZCb8tWKaIvNVYDRLMDRF5qvAaC9RjABKQX+2iYGK2L0/lqvITQLU2PYxF59oIvciodxE9aT7Cn3YUrxutMhTTWJHSFJjk7vFveCGVT64wFC+mwPrmuh2qpo9Gm78OSbNP8+vW+h2RdXRwBnpNJNY52HnTl/Tvul2uAlQZ5n4jo6ldgLSGHvM4TfFMZxkooB/9IGHC32Dd47v8qwnmSz8/VU6HjlSLXo86NhTTKjjWvLKWOVYmx6qxFNMEv+5BDXm0FYzqp87w0TxL707TrbmoxejBoMC/dNj6hg0FaMUBsamIJ1gAhXE/2gkRn1zjHQzchNft0Vh46kThXPcZMUmSZImyEo85LwTLTZR/Dqy8eYMy5gRFVQEqcnKn00NL6OIMbhT7J/uobvDi+8ORMbKcXV6Sk06nlivQ2aYI0cX/Nkmhr/bJ27qBU6lyTITW2cx+6OR/czECcp6n4lmB29jFWuZSR3kxDZRohXr60QRmSjBFj7zy/VuifvX3ZktNw4CUbTZF4HU//+1MzU15UpC2Wl0GznKeXbJPtYGNFw+kq4y6eJPuvHvlnzqUDYp4qsrYu2GLrgGIRMWmyToMTJ+yrzNxMobzV70iHubyS5/3VbRp+JFJkHeZSXZw2u1ifz3FfmopuhhbXVNgrzZ3JFm6XqTKO/KbFiz1NEXHGLSR5MJ6yxtAjnR8TzaghxNxD9Q+o63P8uk0EARlibiepM8M7C5yfq/jgaEYzW6fUY7NQc3AsW+qGtiJrpujQZqkJTr+xUmfmaMw9DALlnvXN5iQpNrhdx4F4+2qiZ4B4U5f7NMKFVxyUrfJE21SJ/UCVtmzu2oc4EkBTAR/c0WDFGS/zW6JjxXyqg0jWdlE2jc+kGjafJVJsdcpczTJAdfZZLmYsIKzbHxZSZlcvzfqk2qi8omXCfLS14pO2002UCTY3JyTzBK8+cT0KqHJkk8yEYnbsxqm/B0nT+riLAH+vHSC9+xxlnps1N/LGrSaSDgKqZNP/47alJOTOgLHl6VsQOjqfJjmjAVsjZiz/x/BTZJNGCh8CVXTk23ZtiEjfSkjKGKI8aVc+tZvYKJOzv1NaQvGejVtdOLkNyaVRumsJCYrP+HtTEgKatdwYQ3YOq+WuhRXrW6qfFCKhE8s0B+5MDLsDTidEw6XXl9BXPiGiD82PpYOnEJEHLwzEvILxrOuEkwYBw7mo2QtUy4E3qrQN9UWc2EKxZoDGYjJEWTRJJvwNkEpwQzYQ8ky6PhNEnVJALLQMEzX5XzVg5ABcvUasomoa5WyeZ85DspbM1g4loRKtdlRaWlIpYlkE4QmV0osrEIUgqHc4zSDLZGnniOtGpXWosuxiaexC3ZKTjs8AJ5wlsTeMwTN4OHFhDcwsN31C67RpAE6eaI70V3D3UgEQPdu8jYoOdBaXUqb9JKqyvOKCbHwCojsiHT0LfVaT64CpnvZLLdlOPIaN2GZZvrkXkktsMvyFUjhlQEPt7ZB857A6Yr6ZtwNLQOc+nOYHmdisl8pQmXjTR56+46B63AvWN3nWQIBr9FcJMxtwZny3wOCniJQBPLZ6HIKNmTFj7zaehgnG5IA9MZgCorEBzhHIERtIaoC+riCmMQ7czvd3GFUQRjlUC/SYZxhXF0d4cJydMstQe1ckVhRcpRZzSOrFnCd6xL7p4EmL1n7RJ+ZG1Cc69stt22sqLMWgOvIEdr/V8evUfvnbUtDg6KJfyD702iB5HvTDaf5rfcl7B9LhzdF/e1KHVX+jjAdE8S0e9QiUS/QyU9G4q9Gx9E7n3bJ3qKv9V7xdEL6n3e9k/XuNytDfa/8n370yIczfGFfzh9PCF/AO05CsbY5N8mAAAAAElFTkSuQmCC" class="logo"></dt>
      <dd>
        <router-link tag="button" to = "/user/login">手机号登录</router-link>
        <router-link tag="button" to = "/user/register">注册</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/lib/reset.scss';
.box {
  width: 100%;
  height: 100%;
  background: #f9eeed;
  .logo-box {
    width: 100%;
    height: 1.75rem;
    margin-bottom: 0.3rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img{
      display: block;
      width: 0.82rem;
      height: 0.82rem;
      color: #d33a31;
    }
  }
  dd {
    width: 100%;
    overflow: hidden;
    button {
      width: 80%;
      height: 40px;
      border: 1px solid #a1433a;
      border-radius: 40px;
      outline: none;
      font-size: 16px;
      color: #de464e;
      background: #fff;
      display: block;
      margin-top: 20px;
      margin-left: 10%;
    }
  }
}
</style>
