import{a7 as o}from"./iframe-DymAqe7-.js";import{u as S}from"./useProfileLayout-Chnzl9q_.js";import{u as c,B as g}from"./useBookmarks-CkXkl_ZZ.js";import{L as k}from"./Layout-Ch8DN8Vp.js";import{P as x}from"./PageBase-CoLz46Z-.js";import{H as p}from"./Heading-D0_eZ5cX.js";import{T as b}from"./Toolbar-Drk7VyiP.js";import{B as I}from"./BookmarkModal-ClagqMTx.js";import{u as h}from"./useInboxLayout-BMOrMrMc.js";import{u as f}from"./useAccountMenu-Cuja8GTt.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-_yipu7Ih.js";import"./Bell-DXnneXz8.js";import"./Bookmark-CagmMTJC.js";import"./ClockDashed-yyabM1jF.js";import"./globalMenu-D6N8iE20.js";import"./PersonCircle-rlQZoMCW.js";import"./Buildings2-DOm1zsvq.js";import"./InboxFill-i0qqJvO9.js";import"./MenuGrid-CwgZnzkz.js";import"./MagnifyingGlass-DYyWgrew.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-B6hnNlJU.js";import"./Trash-440SdK96.js";import"./useLayout-D0qLdsqp.js";import"./useLocale-BdhSyknZ.js";import"./header-B31FzSgx.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B3cy-uAB.js";import"./BookmarkSettingsItem-CjtpOwr7.js";import"./QueryLabel-COzfai_T.js";import"./Plus-k9X7JJ5T.js";import"./SettingsItemBase-CcCy9gQm.js";import"./ItemMedia-BNXDJXQ4.js";import"./Avatar--eqxbK2x.js";import"./AvatarGroup-C7VtBu50.js";import"./ChevronUp-DmvfmoSK.js";import"./ChevronDown-D0JeQuoP.js";import"./ChevronRight-DBeZxa-Y.js";import"./ItemBase-CCp86b5G.js";import"./ItemLink-BckblcU7.js";import"./ItemControls-DPpG0bqy.js";import"./Badge-FB3xbQux.js";import"./Tooltip-BfF0ydp0.js";import"./Typography-CpmuPi_2.js";import"./useHighlightedText-CHgJbocK.js";import"./ContextMenu-B6RF4Vop.js";import"./useDropdownMenuController-DAEYpjlT.js";import"./Dropdown-Cp-0Evcf.js";import"./SearchField-BGWHdZv0.js";import"./FieldBase-CV5Nsw3m.js";import"./Field-Ct7nmimk.js";import"./Label-jxhD3VW5.js";import"./Input-XXqZV2PD.js";import"./MenuListItem-tD-sg5OP.js";import"./MenuListDivider-D_6Pn6hY.js";import"./MenuListHeading-D0t38-BK.js";import"./MenuItem-Q0-LXmKI.js";import"./Checkmark-BfyIm5TX.js";import"./ItemLabel-D1_6NRfu.js";import"./InformationSquare-DzVIiFVQ.js";import"./MenuElipsisHorizontal-DLk1idta.js";import"./Pencil-CHu6UKWn.js";import"./SkipLink-B5HYg5en.js";import"./Banner-CocSma32.js";import"./GlobalHeader-CzihCqsA.js";import"./useIsDesktop-j0VFbwFh.js";import"./GlobalAccountButton-BfY3GnpM.js";import"./Enter-DWMjdkvw.js";import"./GlobalMenuButton-Dede5A4W.js";import"./MenuHamburger-Dd-pEmxt.js";import"./AccountSelector-BKcRoBdU.js";import"./Switch-BGPW__x6.js";import"./AccountMenu-B3vhIwOB.js";import"./GlobalMenu-DKRvnmZn.js";import"./ArrowUndo-CorOpU9E.js";import"./Globe-DfCPO3oM.js";import"./BreadcrumbsLink-BJTZ_Q0Q.js";import"./ArrowRight-CKcVQFjK.js";import"./Footer-CL1Hmlk_.js";import"./Flex-SVKdN4dv.js";import"./ButtonGroup-Bmdo2OtQ.js";import"./ButtonGroupDivider-CV7n4r5d.js";import"./ChevronUpDown-DPWliHQQ.js";import"./ToolbarMenu-XDd7ybGb.js";import"./ToolbarSearch-BPkQx4lM.js";import"./SettingsModal-BR0dL4iR.js";import"./ModalBody-B4NkrjfW.js";import"./Section-VcJzw9XS.js";import"./ButtonIcon-X8AJhbmq.js";import"./ButtonLabel-CUwAx-eR.js";import"./TextField-C7QREjp_.js";import"./inboxMenu-DT_aPttX.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
