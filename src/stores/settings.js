import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const provider = ref(localStorage.getItem('provider') || 'openai')
  const openaiApiKey = ref(localStorage.getItem('openaiApiKey') || '')
  const claudeApiKey = ref(localStorage.getItem('claudeApiKey') || '')
  const deepseekApiKey = ref(localStorage.getItem('deepseekApiKey') || '')
  const modelName = ref(localStorage.getItem('modelName') || 'gpt-3.5-turbo')
  const temperature = ref(parseFloat(localStorage.getItem('temperature')) || 0.7)

  function setProvider(newProvider) {
    provider.value = newProvider
    localStorage.setItem('provider', newProvider)
  }

  function setOpenaiApiKey(key) {
    openaiApiKey.value = key
    localStorage.setItem('openaiApiKey', key)
  }

  function setClaudeApiKey(key) {
    claudeApiKey.value = key
    localStorage.setItem('claudeApiKey', key)
  }

  function setDeepseekApiKey(key) {
    deepseekApiKey.value = key
    localStorage.setItem('deepseekApiKey', key)
  }

  function setModelName(name) {
    modelName.value = name
    localStorage.setItem('modelName', name)
  }

  function setTemperature(temp) {
    temperature.value = temp
    localStorage.setItem('temperature', temp.toString())
  }

  return {
    provider,
    openaiApiKey,
    claudeApiKey,
    deepseekApiKey,
    modelName,
    temperature,
    setProvider,
    setOpenaiApiKey,
    setClaudeApiKey,
    setDeepseekApiKey,
    setModelName,
    setTemperature
  }
}) 