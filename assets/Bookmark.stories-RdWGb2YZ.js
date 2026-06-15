import{a7 as o}from"./iframe-CH-Rf2AI.js";import{u as S}from"./useProfileLayout-BdN1chqp.js";import{u as c,B as g}from"./useBookmarks-DyzvDjir.js";import{L as k}from"./Layout-5CLSl6Qa.js";import{P as x}from"./PageBase-BcnUpMFY.js";import{H as p}from"./Heading-BVqV7FRe.js";import{T as b}from"./Toolbar-B5whV829.js";import{B as I}from"./BookmarkModal-5RpAYdF5.js";import{u as h}from"./useInboxLayout-ZLUoUUkH.js";import{u as f}from"./useAccountMenu-D2zJVa-5.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-BYSAi8Z7.js";import"./Bell-fcA9xSh9.js";import"./Bookmark-D8GfnLN6.js";import"./ClockDashed-An8qJSBT.js";import"./globalMenu-C99LfLi3.js";import"./PersonCircle-BwpYfq3Y.js";import"./Buildings2-DK48JhGB.js";import"./InboxFill-CjX93Lsg.js";import"./MenuGrid-D-M2D-4J.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-hrfshYGt.js";import"./Trash-BAmIqX5W.js";import"./useLayout-CHzeUI8x.js";import"./useLocale-C_wYC4TW.js";import"./header-D6LNfdoA.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-FkcUMU_-.js";import"./BookmarkSettingsItem-Pi8Ol1QT.js";import"./QueryLabel-BtHWbHzV.js";import"./Plus-BQYmFmTa.js";import"./SettingsItemBase-Cht2WGOe.js";import"./ItemMedia-BczcOirL.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./ChevronUp-COzX9VRs.js";import"./ChevronDown-D_JnpA4f.js";import"./ChevronRight-uifDbL9f.js";import"./ItemBase-B9tNoNOm.js";import"./ItemLink-FshzAh5h.js";import"./ItemControls-loNIR_kd.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./Typography-CqA3kMNv.js";import"./useHighlightedText-DIHcSE2r.js";import"./ContextMenu-ClDw9k8P.js";import"./useDropdownMenuController-C7q1T2hK.js";import"./Dropdown-_OswQPQg.js";import"./SearchField-Dm3ERjlY.js";import"./FieldBase-BRTqs99O.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuListHeading-DRQf-aXW.js";import"./MenuItem-BWxi170U.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./index-Bn39eRZ3.js";import"./InformationSquare-D0kDsS_w.js";import"./MenuElipsisHorizontal-BHY8BNqA.js";import"./Pencil-CGxgD_fG.js";import"./SkipLink-BCjaOKFl.js";import"./Banner-CnAxrOLU.js";import"./GlobalHeader-sT_AjsbH.js";import"./useIsDesktop-Dgi44TjI.js";import"./GlobalAccountButton-CT8sX0Ns.js";import"./Enter-DkRJwzLX.js";import"./GlobalMenuButton-CnyqvQAO.js";import"./MenuHamburger-DrB2GaRw.js";import"./AccountSelector-BbFrD_97.js";import"./Switch-C3S78qS-.js";import"./AccountMenu-NcwbISGC.js";import"./GlobalMenu-BpjEBk4h.js";import"./ArrowUndo-DkUyPEkv.js";import"./Globe-QtnCWb3M.js";import"./BreadcrumbsLink-jByZbqzh.js";import"./ArrowRight-CDNjHBQ0.js";import"./Footer-AF14lKWa.js";import"./Flex-BtYwPl5t.js";import"./ButtonGroup-6-1iOFaS.js";import"./ButtonGroupDivider-h_7e4qvH.js";import"./ChevronUpDown-D4KfXAKY.js";import"./ToolbarMenu-BA267ZrV.js";import"./ToolbarSearch-SraTjllo.js";import"./SettingsModal-Bx3rcEds.js";import"./ModalBody-DWS6WpdW.js";import"./Section-DzGR-IUh.js";import"./ButtonIcon-CIT11Yqm.js";import"./ButtonLabel-DngeK8JL.js";import"./TextField-B2WC8qDF.js";import"./inboxMenu-D0cikHk1.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
