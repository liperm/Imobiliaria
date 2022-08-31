import Vue from 'vue';
import ImobiliariaIcon from '@/components/icon/Icon.vue';
import ImobiliariaForm from '@/components/form/Form.vue';
import ImobiliariaInput from '@/components/input/Input.vue';
import ImobiliariaTextarea from '@/components/input/Textarea.vue';
import ImobiliariaNavbar from '@/components/navbar/Navbar.vue';
import ImobiliariaTopbar from '@/components/topbar/Topbar.vue';
import ImobiliariaPagination from '@/components/pagination/Pagination.vue';
import ImobiliariaSelect from '@/components/select/Select.vue';
import ImobiliariaModal from '@/components/modal/Modal.vue';
import ImobiliariaModalConfirm from '@/components/modal/ModalConfirm.vue';
import ImobiliariaModalDelete from '@/components/modal/ModalDelete.vue';
import ImobiliariaAvatar from '@/components/avatar/Avatar.vue';
import ImobiliariaInvisible from '@/components/invisible/Invisible.vue';
import ImobiliariaImage from '@/components/image/Image.vue';
import ImobiliariaButton from '@/components/button/Button.vue';
import ImobiliariaEmpty from '@/components/empty/Empty.vue';
import ImobiliariaImovelLink from '@/modules/imovel/components/ImovelLink.vue';

// Containers
import ImobiliariaRow from '@/components/container/Row.vue';
import ImobiliariaCol from '@/components/container/Column.vue';
import ImobiliariaContainer from '@/components/container/Container.vue';

// Typography
import ImobiliariaP from '@/components/typography/Paragraph.vue';
import ImobiliariaSmall from '@/components/typography/Small.vue';
import ImobiliariaHeader from '@/components/typography/Header.vue';

const components = {
  ImobiliariaIcon,
  ImobiliariaForm,
  ImobiliariaInput,
  ImobiliariaTextarea,
  ImobiliariaNavbar,
  ImobiliariaTopbar,
  ImobiliariaPagination,
  ImobiliariaSelect,
  ImobiliariaModal,
  ImobiliariaModalConfirm,
  ImobiliariaModalDelete,
  ImobiliariaAvatar,
  ImobiliariaInvisible,
  ImobiliariaImage,
  ImobiliariaButton,
  ImobiliariaEmpty,
  ImobiliariaImovelLink,

  // Containers
  ImobiliariaRow,
  ImobiliariaCol,
  ImobiliariaContainer,

  // Typography
  ImobiliariaP,
  ImobiliariaSmall,
  ImobiliariaHeader,
};

Object.entries(components).forEach(([name, component]) => Vue.component(name, component));
