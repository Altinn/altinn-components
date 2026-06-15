import{a7 as o}from"./iframe-B7zm1HIO.js";import{u as S}from"./useProfileLayout-BzTzEPid.js";import{u as c,B as g}from"./useBookmarks-BWX4TGlR.js";import{L as k}from"./Layout-Cassj10v.js";import{P as x}from"./PageBase-BlSBBGVr.js";import{H as p}from"./Heading-C4G9hOYj.js";import{T as b}from"./Toolbar-DpCVbWdO.js";import{B as I}from"./BookmarkModal-DrVb1rQ2.js";import{u as h}from"./useInboxLayout-B7R7p9GE.js";import{u as f}from"./useAccountMenu-D7fZnHGH.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-C8fhVq4A.js";import"./Bell-D0p2v7L1.js";import"./Bookmark-B2h1OSuG.js";import"./ClockDashed-eOrtry98.js";import"./globalMenu-C15J_TzK.js";import"./PersonCircle-DXrw5zTF.js";import"./Buildings2-7HqIq_go.js";import"./InboxFill-D_MJIPoO.js";import"./MenuGrid-Ds8_htGC.js";import"./MagnifyingGlass-CVQmLynz.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-C46OZ0Wp.js";import"./Trash-RuS005b0.js";import"./useLayout-CxHtoOCN.js";import"./useLocale-N67pTwCc.js";import"./header-Do5dK-M-.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BJG43rHp.js";import"./BookmarkSettingsItem-Cv9Inwps.js";import"./QueryLabel-Csf2n3As.js";import"./Plus-FoCTTomm.js";import"./SettingsItemBase-BHxVPfuU.js";import"./ItemMedia-DpKMg9GF.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./ChevronUp-Drwzt9gE.js";import"./ChevronDown-D45B7h4T.js";import"./ChevronRight-BItcH0VL.js";import"./ItemBase-ChXBoego.js";import"./ItemLink-nWgCSWqv.js";import"./ItemControls-Cwe9s8QR.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./Typography-DnprxIFo.js";import"./useHighlightedText-DWzAFf8R.js";import"./ContextMenu-BrTPiQIt.js";import"./useDropdownMenuController-CJ7JaMXA.js";import"./Dropdown-C9l14m04.js";import"./SearchField-DukYslSD.js";import"./FieldBase-gSBe5vO6.js";import"./Field-09k_Fgnw.js";import"./Label-DrdmFEDz.js";import"./Input-w1DANTSA.js";import"./MenuListItem-6z1MFl70.js";import"./MenuListDivider-Bbe3EvM4.js";import"./MenuListHeading-Y6BZZd_3.js";import"./MenuItem-B-gSoajH.js";import"./Checkmark-BLhcN1Ai.js";import"./ItemLabel-CWIv-i-M.js";import"./InformationSquare-ZkZeHusi.js";import"./MenuElipsisHorizontal-nksXxlhw.js";import"./Pencil--toDUn3l.js";import"./SkipLink-YxQJS3g-.js";import"./Banner-Mk_p_JI_.js";import"./GlobalHeader-DjnN8QQb.js";import"./useIsDesktop-Ch8zfKuk.js";import"./GlobalAccountButton-B6M1sOUp.js";import"./Enter-BflKqtww.js";import"./GlobalMenuButton-DJahuh3B.js";import"./MenuHamburger-fk9ZJfiD.js";import"./AccountSelector-CEIjM3_I.js";import"./Switch-C9KZAM8P.js";import"./AccountMenu-Hj1w0XqH.js";import"./GlobalMenu-0v3nn1aY.js";import"./ArrowUndo-Cse4EeXq.js";import"./Globe-GXniMQLU.js";import"./BreadcrumbsLink-BappmQre.js";import"./ArrowRight-CFsWQzYW.js";import"./Footer-Wuq4V7BY.js";import"./Flex-N2sBTmCS.js";import"./ButtonGroup-DEQPq0-6.js";import"./ButtonGroupDivider-DmW0LByL.js";import"./ChevronUpDown-BUNtu_Ei.js";import"./ToolbarMenu-CyHXgfkz.js";import"./ToolbarSearch-Dg7pxinA.js";import"./SettingsModal-D2UTX3Lg.js";import"./ModalBody-BUYK0n2i.js";import"./Section-DkuWWe6d.js";import"./ButtonIcon-HLjqR8Bo.js";import"./ButtonLabel-D1cCa6No.js";import"./TextField-CsiKyP5a.js";import"./inboxMenu-flzFi4fb.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
