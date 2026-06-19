import{a7 as o}from"./iframe-DmJr8_aG.js";import{u as S}from"./useProfileLayout-DNOzSM43.js";import{u as c,B as g}from"./useBookmarks-D5OQ4IVS.js";import{L as k}from"./Layout-DLxPsprs.js";import{P as x}from"./PageBase-BNe_d54d.js";import{H as p}from"./Heading-I9-B5g1d.js";import{T as b}from"./Toolbar-Ow0gw22j.js";import{B as I}from"./BookmarkModal-DmWtLk-6.js";import{u as h}from"./useInboxLayout-B3szkuHR.js";import{u as f}from"./useAccountMenu-BG1Y_4i1.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-D2JR3RsC.js";import"./Bell-BiSPcz-A.js";import"./Bookmark-BRD6PYVS.js";import"./ClockDashed-DRGVm61A.js";import"./globalMenu-BY8j_xy9.js";import"./PersonCircle-CZIo1pnz.js";import"./Buildings2-D0SF9Z2H.js";import"./InboxFill-Bk_fRuP2.js";import"./MenuGrid-CKPctO2j.js";import"./MagnifyingGlass-CtP3bCTw.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-TTyNUjQp.js";import"./Trash-BOmSsjSD.js";import"./useLayout-DsH0EDkG.js";import"./useLocale-l5QJvsBb.js";import"./header-B4RJkTcA.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DCAZlAYS.js";import"./BookmarkSettingsItem-BY8ZphRp.js";import"./QueryLabel-D06Z-39I.js";import"./Plus-CfdwKNmJ.js";import"./SettingsItemBase-CadGMhEl.js";import"./ItemMedia-BAIJH8U4.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./ChevronUp-C82RtbQz.js";import"./ChevronDown-hTjRae3D.js";import"./ChevronRight-kR30sXpx.js";import"./ItemBase-DGqNBtsw.js";import"./ItemLink-CF3E9h13.js";import"./ItemControls-C3FVXvI0.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./Typography-B5vyFnSY.js";import"./useHighlightedText-CDpmDje8.js";import"./ContextMenu-Ce4MM7JC.js";import"./useDropdownMenuController-C3IF3Z6L.js";import"./Dropdown-CSc8TyC7.js";import"./SearchField-DIEgnIKm.js";import"./FieldBase-B-b_vsUI.js";import"./Field-z2_rHtRr.js";import"./Label-C9gCQCNv.js";import"./Input-CMjX-VJR.js";import"./MenuListItem-CfwtrDuI.js";import"./MenuListDivider-DxYIfIoZ.js";import"./MenuListHeading-D4ODluyz.js";import"./MenuItem-BAlZe3i8.js";import"./Checkmark-DdnTh1PT.js";import"./ItemLabel-BZFwI3Qg.js";import"./InformationSquare-BDz-_K2o.js";import"./MenuElipsisHorizontal-BSIPnNnd.js";import"./Pencil-Cm64c2kP.js";import"./SkipLink-bd2dEo_L.js";import"./Banner-sSuuPOtA.js";import"./GlobalHeader-1MFRCnK1.js";import"./useIsDesktop-BUXnVuQb.js";import"./GlobalAccountButton-BTNSY6aM.js";import"./Enter-BRo8_hWS.js";import"./GlobalMenuButton-DFRDjsP2.js";import"./MenuHamburger-EwCvIS65.js";import"./AccountSelector-BW4qny3W.js";import"./Switch-NPoiVkTV.js";import"./AccountMenu-C4U3FMVS.js";import"./GlobalMenu-BbbSy8Mv.js";import"./ArrowUndo-oxrOyorJ.js";import"./Globe-0sVjJkCt.js";import"./BreadcrumbsLink-CE_H6JB9.js";import"./ArrowRight-BWjamCg9.js";import"./Footer-BOms_iP6.js";import"./Flex-D91Qf6jp.js";import"./ButtonGroup-ps_HIdpu.js";import"./ButtonGroupDivider-Cq1pylXQ.js";import"./ChevronUpDown-7NIglTvp.js";import"./ToolbarMenu-BNi9oIII.js";import"./ToolbarSearch-_x_uSUqx.js";import"./SettingsModal-B1XNc6l-.js";import"./ModalBody-C0hCt4EK.js";import"./Section-xPiqNpLG.js";import"./ButtonIcon-lLWPwtnI.js";import"./ButtonLabel-CTdEbbj7.js";import"./TextField-Cv73iNpE.js";import"./inboxMenu-BUKVPlAz.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};const ke=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ke as __namedExportsOrder,ge as default};
