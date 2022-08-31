<template>
  <div>
    <div class="m--lg">
      <div>Buttons</div>
      <hr />

      <imobiliaria-row class="my--lg">
        <imobiliaria-button>Default</imobiliaria-button>
        <imobiliaria-button theme="primary">Primary</imobiliaria-button>
        <imobiliaria-button theme="success">Success</imobiliaria-button>
        <imobiliaria-button theme="info">Info</imobiliaria-button>
        <imobiliaria-button theme="warning">Warning</imobiliaria-button>
        <imobiliaria-button theme="danger">Danger</imobiliaria-button>
      </imobiliaria-row>

      <imobiliaria-row class="my--lg">
        <imobiliaria-button disabled>Default</imobiliaria-button>
        <imobiliaria-button theme="primary" disabled>Primary</imobiliaria-button>
        <imobiliaria-button theme="success" disabled>Success</imobiliaria-button>
        <imobiliaria-button theme="info" disabled>Info</imobiliaria-button>
        <imobiliaria-button theme="warning" disabled>Warning</imobiliaria-button>
        <imobiliaria-button theme="danger" disabled>Danger</imobiliaria-button>
      </imobiliaria-row>

      <imobiliaria-row class="mb--lg">
        <imobiliaria-button plain>Default</imobiliaria-button>
        <imobiliaria-button theme="primary" plain>Primary</imobiliaria-button>
        <imobiliaria-button theme="success" plain>Success</imobiliaria-button>
        <imobiliaria-button theme="info" plain>Info</imobiliaria-button>
        <imobiliaria-button theme="warning" plain>Warning</imobiliaria-button>
        <imobiliaria-button theme="danger" plain>Danger</imobiliaria-button>
      </imobiliaria-row>

      <imobiliaria-row class="mb--lg">
        <imobiliaria-button plain disabled>Default</imobiliaria-button>
        <imobiliaria-button theme="primary" plain disabled>Primary</imobiliaria-button>
        <imobiliaria-button theme="success" plain disabled>Success</imobiliaria-button>
        <imobiliaria-button theme="info" plain disabled>Info</imobiliaria-button>
        <imobiliaria-button theme="warning" plain disabled>Warning</imobiliaria-button>
        <imobiliaria-button theme="danger" plain disabled>Danger</imobiliaria-button>
      </imobiliaria-row>

      <imobiliaria-row class="mb--lg">
        <imobiliaria-button icon="search"></imobiliaria-button>
        <imobiliaria-button theme="primary" icon="pencil"></imobiliaria-button>
        <imobiliaria-button theme="success" icon="check-lg"></imobiliaria-button>
        <imobiliaria-button theme="info" icon="book"></imobiliaria-button>
        <imobiliaria-button theme="warning" icon="chat"></imobiliaria-button>
        <imobiliaria-button theme="danger" icon="eraser"></imobiliaria-button>
      </imobiliaria-row>
    </div>
    <div class="m--lg">
      <div>Header</div>
      <hr />

      <imobiliaria-row class="my--lg">
        <imobiliaria-header size="sm">Meu título</imobiliaria-header>
        <imobiliaria-header size="md">Meu título</imobiliaria-header>
        <imobiliaria-header size="lg">Meu título</imobiliaria-header>
      </imobiliaria-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DashboardPage',
};
</script>
