# 📞 Máscara de Telefone - Informações

## Implementação

O campo de telefone no formulário de contato agora possui uma máscara automática que formata o número enquanto o usuário digita.

### Formato

- **Padrão**: `(000) 000-0000`
- **Exemplo**: `(954) 654-6628`

### Como Funciona

1. **Digitação Automática**: Ao digitar, o formato é aplicado automaticamente
2. **Validação**: O formulário só aceita números no formato correto
3. **Experiência do Usuário**: Facilita a entrada de dados e evita erros

### Tecnologia Utilizada

- **Biblioteca**: `react-imask`
- **Compatibilidade**: React 19+
- **Integração**: React Hook Form + Controller

### Código Implementado

```jsx
<Controller
  name="phone"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <IMaskInput
      mask="(000) 000-0000"
      value={field.value}
      onAccept={(value) => field.onChange(value)}
      onBlur={field.onBlur}
      placeholder="(954) 654-6628"
      type="tel"
    />
  )}
/>
```

### Validação

O schema Zod foi atualizado para validar o formato:

```javascript
phone: z.string()
  .min(14, 'Please enter a valid phone number')
  .regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Please enter a valid phone number')
```

## Personalização

### Mudar o Formato da Máscara

Para alterar o formato do telefone, edite o arquivo `/components/Contact.jsx`:

```jsx
// Formato atual (EUA)
mask="(999) 999-9999"

// Formato Brasil
mask="(99) 99999-9999"

// Formato internacional
mask="+9 (999) 999-9999"
```

### Ajustar a Validação

Atualize o regex no schema para corresponder ao novo formato:

```javascript
// Para formato brasileiro
phone: z.string()
  .min(15, 'Digite um telefone válido')
  .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Digite um telefone válido')
```

## Exemplos de Uso

### Usuário digita: `9546546628`
**Resultado formatado**: `(954) 654-6628`

### Usuário digita: `1234567890`
**Resultado formatado**: `(123) 456-7890`

## Benefícios

✅ **Melhor UX**: Usuário vê o formato enquanto digita
✅ **Menos Erros**: Formato consistente evita erros de digitação
✅ **Validação Visual**: Usuário sabe exatamente o formato esperado
✅ **Profissional**: Aparência mais polida e profissional
✅ **Acessibilidade**: Campo `type="tel"` ativa teclado numérico em mobile

## Compatibilidade

- ✅ Desktop (todos os navegadores modernos)
- ✅ Mobile (iOS Safari, Chrome Android)
- ✅ Tablets
- ✅ Acessível via teclado
- ✅ Screen readers

## Testes

Para testar a máscara:

1. Acesse o formulário de contato
2. Clique no campo "Phone"
3. Digite apenas números
4. Observe a formatação automática
5. Tente enviar com formato incompleto (verá erro de validação)
6. Complete o número e envie

## Troubleshooting

### Máscara não aparece
- Verifique se `react-input-mask` está instalado: `npm list react-input-mask`
- Reinstale se necessário: `npm install react-input-mask`

### Validação não funciona
- Verifique se o regex no schema corresponde ao formato da máscara
- Certifique-se de que o `Controller` está sendo usado corretamente

### Formato diferente do esperado
- Verifique a propriedade `mask` no componente `InputMask`
- Ajuste o regex de validação para corresponder

## Recursos Adicionais

- [React Input Mask - Documentação](https://github.com/sanniassin/react-input-mask)
- [React Hook Form - Controller](https://react-hook-form.com/docs/usecontroller/controller)
- [Zod - String Validation](https://zod.dev/?id=strings)

## Formatos Comuns de Máscaras

```javascript
// EUA
"(999) 999-9999"

// Brasil
"(99) 99999-9999"

// Internacional
"+99 (999) 999-9999"

// Apenas números (sem formatação visual)
"99999999999"
```

## Notas

- A máscara aceita apenas números (0-9)
- Caracteres especiais são adicionados automaticamente
- O valor enviado no formulário inclui a formatação
- Para remover formatação antes de enviar, use: `phone.replace(/\D/g, '')`
