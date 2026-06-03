import{a7 as o}from"./iframe-Dmn_-H53.js";import{u as S}from"./useProfileLayout-DL8xij_E.js";import{u as c,B as g}from"./useBookmarks-D8s4v-m-.js";import{L as k}from"./Layout-DvbYw_k_.js";import{P as x}from"./PageBase-BpHOckLl.js";import{H as p}from"./Heading-mFrUmf7m.js";import{T as b}from"./Toolbar-BusIapvv.js";import{B as I}from"./BookmarkModal-BaR_TEvl.js";import{u as h}from"./useInboxLayout-DQeYdn6w.js";import{u as f}from"./useAccountMenu-CYZ6jSvt.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-9Go6A22I.js";import"./Bell-5_GtUnTX.js";import"./Bookmark-BlnRkon0.js";import"./ClockDashed-DY63JtTq.js";import"./globalMenu-DtX0fiTQ.js";import"./PersonCircle-WloE75L6.js";import"./Buildings2-DimBhMnp.js";import"./InboxFill-CYPcUZnp.js";import"./MenuGrid-BGYI9ZUm.js";import"./MagnifyingGlass-CJgpPnEh.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BHSi9wSQ.js";import"./Trash-DbwGnQTy.js";import"./useLayout-CTXk1uJP.js";import"./useLocale-BlHKldRk.js";import"./header-Y-kAzlJL.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B_9AoNot.js";import"./BookmarkSettingsItem-CpYpo8Tt.js";import"./QueryLabel-CUupVATa.js";import"./Plus-CqXOqTKR.js";import"./SettingsItemBase-CYKWgdSM.js";import"./ItemMedia-D_bOU9XF.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./ChevronUp-EToNysLX.js";import"./ChevronDown-VmG4T_9A.js";import"./ChevronRight-Wr9L-VUi.js";import"./ItemBase-C7SIy94-.js";import"./ItemLink-bXYHdO_H.js";import"./ItemControls-CbvyOb0R.js";import"./Badge-De6DPsXj.js";import"./Tooltip-CdtWGkOh.js";import"./Typography-BUxrbwUx.js";import"./useHighlightedText-CD-cx98y.js";import"./ContextMenu-CGD-TvHH.js";import"./useDropdownMenuController-DHTHwr26.js";import"./Dropdown-DpD8qCpr.js";import"./SearchField-DeTed8Dk.js";import"./FieldBase-BLinraZG.js";import"./Field-1tw-cTWp.js";import"./Label-D7CtZtsQ.js";import"./Input-CiIUlzDr.js";import"./MenuListItem-CwZ16ivE.js";import"./MenuListHeading-BrW5zaeP.js";import"./MenuItem-C30u_q0-.js";import"./Checkmark-DzxOHVu0.js";import"./ItemLabel-ejtJzCEp.js";import"./index-Qm016dy0.js";import"./InformationSquare-DAE6V11Y.js";import"./MenuElipsisHorizontal-CvUsH0ZC.js";import"./Pencil--omKMKBe.js";import"./SkipLink-DVrtEER0.js";import"./Banner--oliSiSS.js";import"./GlobalHeader-sqQSfQze.js";import"./useIsDesktop-C8-Z1QBA.js";import"./GlobalAccountButton-BPzcPF_y.js";import"./Enter-DXYuFNDS.js";import"./GlobalMenuButton-_JOt59cv.js";import"./MenuHamburger-CSkbsTiY.js";import"./AccountSelector-syBXk5uc.js";import"./Switch-CBeHloo1.js";import"./AccountMenu-BPfdcptM.js";import"./GlobalMenu-CAozYphW.js";import"./ArrowUndo-bK1i10ui.js";import"./Globe-BayYtb16.js";import"./BreadcrumbsLink-atLnUGNI.js";import"./ArrowRight-CiYFyC7m.js";import"./Footer-8SNF8xbx.js";import"./Flex-Dt5U6DKy.js";import"./ButtonGroup-CPlQwmGd.js";import"./ButtonGroupDivider-D0hGjblB.js";import"./ChevronUpDown-FEbwmu8E.js";import"./ToolbarMenu-BpYXaZ67.js";import"./ToolbarSearch-Dp9Vo43V.js";import"./SettingsModal-DJ1z037I.js";import"./ModalBody-CxAozs8t.js";import"./Section-B0K1LM20.js";import"./ButtonIcon-BdkdVYvg.js";import"./ButtonLabel-wmKbEjn1.js";import"./TextField-wUp0w9YU.js";import"./inboxMenu-Cu11FPup.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
