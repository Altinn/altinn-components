import{a7 as o}from"./iframe-DWxW88Wb.js";import{u as S}from"./useProfileLayout-0VbaMPMR.js";import{u as c,B as g}from"./useBookmarks-CIvQFXkC.js";import{L as k}from"./Layout-BYPYvGug.js";import{P as x}from"./PageBase-D15Ea-7X.js";import{H as p}from"./Heading-Dg7_b6ZQ.js";import{T as b}from"./Toolbar-UK4EUwDV.js";import{B as I}from"./BookmarkModal-BLU0sPBE.js";import{u as h}from"./useInboxLayout-DDcwvXwY.js";import{u as f}from"./useAccountMenu-4JeJgGma.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-4UySQMjC.js";import"./Bell-648GVX1G.js";import"./Bookmark-CjRgSvle.js";import"./ClockDashed-CcEfkX7I.js";import"./globalMenu-DgR3YC_B.js";import"./PersonCircle-4342nGFh.js";import"./Buildings2-FcIOdoWf.js";import"./InboxFill-DWim87Ku.js";import"./MenuGrid-DDlbbuJg.js";import"./MagnifyingGlass-DeszhIH4.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-FtzxqCV-.js";import"./Trash-D9-PBT3O.js";import"./useLayout-4B-kyIHY.js";import"./useLocale-BN0KHM64.js";import"./header-B3BwDgq_.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DXA38xVt.js";import"./BookmarkSettingsItem-zfkMZEvH.js";import"./QueryLabel-U07_SSTB.js";import"./Plus-DPgCKFUP.js";import"./SettingsItemBase-C3RYc2hI.js";import"./ItemMedia-pWda_jSz.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./ChevronUp-CEtfk9lQ.js";import"./ChevronDown-BB-XUZ3B.js";import"./ChevronRight-CaZE672G.js";import"./ItemBase-RbXLRpNl.js";import"./ItemLink-BIjbM8cf.js";import"./ItemControls-uvaqS71K.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./Typography-Dvuik0pJ.js";import"./useHighlightedText-Kme-_nwy.js";import"./ContextMenu-CS8Y-rHM.js";import"./useDropdownMenuController-D6SwXekY.js";import"./Dropdown-CCIsf4ws.js";import"./SearchField-DiX0tG9c.js";import"./FieldBase-CIL3pXPs.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";import"./MenuListItem-CaAjdfCo.js";import"./MenuListHeading-COGZjwEu.js";import"./MenuItem-CTR_r1KI.js";import"./Checkmark-BMNSyflA.js";import"./ItemLabel-CjOWrvlD.js";import"./index-BBaxa0Qn.js";import"./InformationSquare-BIrp2N6S.js";import"./MenuElipsisHorizontal-Cf3wHrhL.js";import"./Pencil-CSNyvO94.js";import"./SkipLink-DkjEsfbV.js";import"./Banner-BV8VXQU6.js";import"./GlobalHeader-C765PQS9.js";import"./useIsDesktop-BCueAbhV.js";import"./GlobalAccountButton-COsKF7Tf.js";import"./Enter-Fxl2xNK-.js";import"./GlobalMenuButton-Bg2p-r2N.js";import"./MenuHamburger-DJLRFmM-.js";import"./AccountSelector-EEHH-Kq6.js";import"./Switch-DePifvnb.js";import"./AccountMenu-Dfu0uW3u.js";import"./GlobalMenu-BUd0VjgT.js";import"./ArrowUndo-BNbnSrnn.js";import"./Globe-BJLo8sVQ.js";import"./BreadcrumbsLink-CNTXGuVE.js";import"./ArrowRight-DK82HgDq.js";import"./Footer-CDr_1NMF.js";import"./Flex-DNJfc4Fp.js";import"./ButtonGroup-2XmunmNq.js";import"./ButtonGroupDivider-yFjiJINn.js";import"./ChevronUpDown-BVSifUrF.js";import"./ToolbarMenu-BrBQHBGp.js";import"./ToolbarSearch-CEdhKPLF.js";import"./SettingsModal-ZI_QNcze.js";import"./ModalBody-xWN5bJLh.js";import"./Section-B1-gfm2g.js";import"./ButtonIcon-BQmJIoeH.js";import"./ButtonLabel-B02-0FY2.js";import"./TextField-BJZMsOod.js";import"./inboxMenu-DKkeN3LP.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
