import{a7 as o}from"./iframe-CTaNoWWa.js";import{u as S}from"./useProfileLayout-D4UEFukb.js";import{u as c,B as g}from"./useBookmarks-Crmf6BBq.js";import{L as k}from"./Layout-ztqvTzZz.js";import{P as x}from"./PageBase-Ba2nVxeQ.js";import{H as p}from"./Heading-C1mUjHlh.js";import{T as b}from"./Toolbar-CAqEr0l8.js";import{B as I}from"./BookmarkModal-CjBQTn1l.js";import{u as h}from"./useInboxLayout-DfC91dpY.js";import{u as f}from"./useAccountMenu-yJvwqDmn.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-DLl89KL7.js";import"./Bell-evwoybZo.js";import"./Bookmark-DGfz7cvs.js";import"./ClockDashed-CbT8_7l3.js";import"./globalMenu-BS_tt6qz.js";import"./PersonCircle-D6oRdq4h.js";import"./Buildings2-Dagpcldt.js";import"./InboxFill-D60rUW0a.js";import"./MenuGrid-CgTnRfwQ.js";import"./MagnifyingGlass-DGspW_mh.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-UJ9hFBtH.js";import"./Trash-B7D9F4yI.js";import"./useLayout-BKIf_Q3c.js";import"./useLocale-jKiJ7_lB.js";import"./header-DcEcm5tB.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CpFtChbI.js";import"./BookmarkSettingsItem-cshCFLbG.js";import"./QueryLabel-DCH_638I.js";import"./Plus-B6k-0-JZ.js";import"./SettingsItemBase-CvuyejAQ.js";import"./ItemMedia-wY5sofun.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./ChevronUp-0PuCoJui.js";import"./ChevronDown-BHW7W_eE.js";import"./ChevronRight-CohjqIQG.js";import"./ItemBase-DKpUUlFO.js";import"./ItemLink-B-O_qCzl.js";import"./ItemControls-DMuz6Cbk.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./Typography-CN45st3d.js";import"./useHighlightedText-B1ZF3HFO.js";import"./ContextMenu-DJ_K9wJs.js";import"./useDropdownMenuController-BJZIrHL7.js";import"./Dropdown-CgaJWkpX.js";import"./SearchField-ybvTeITK.js";import"./FieldBase-CgdWEw7I.js";import"./Field-BInLTKbx.js";import"./Label-yw6hdd5b.js";import"./Input-CTz4y9O9.js";import"./MenuListItem-DQ_58J0s.js";import"./MenuListDivider-CkCLDcCQ.js";import"./MenuListHeading-Gc6ll2v1.js";import"./MenuItem-CimdO91p.js";import"./Checkmark-BhX8-1Sr.js";import"./ItemLabel-BrNBIEws.js";import"./index-CftdW1E-.js";import"./InformationSquare-BkCx_Sj6.js";import"./MenuElipsisHorizontal-eegx-ga-.js";import"./Pencil-uwXsOhra.js";import"./SkipLink-DYV97W-p.js";import"./Banner-D-_QvWr0.js";import"./GlobalHeader-CCGV5ANq.js";import"./useIsDesktop-fev8-fWE.js";import"./GlobalAccountButton-D8lpf3UF.js";import"./Enter-DBB7L9Uo.js";import"./GlobalMenuButton-B-xdr2iA.js";import"./MenuHamburger-BbgaFBH2.js";import"./AccountSelector-Co_y5qQr.js";import"./Switch-DjhkD9Ne.js";import"./AccountMenu-CRjFTbkQ.js";import"./GlobalMenu-LxQFpZ-0.js";import"./ArrowUndo-BPYh_xVN.js";import"./Globe-SZm5TK6g.js";import"./BreadcrumbsLink-BRrGCOt_.js";import"./ArrowRight-BDFixAM4.js";import"./Footer-Jto7sDAp.js";import"./Flex-CN3B00B1.js";import"./ButtonGroup-DcAUocsW.js";import"./ButtonGroupDivider-BHmhovsW.js";import"./ChevronUpDown-Cks1CcB0.js";import"./ToolbarMenu-DDc7FaQn.js";import"./ToolbarSearch-CAommeSk.js";import"./SettingsModal-BQMqrzAH.js";import"./ModalBody-Dfwh0Tur.js";import"./Section-Gj9AU1UQ.js";import"./ButtonIcon-TLZW9XLN.js";import"./ButtonLabel-5YzgT7kC.js";import"./TextField-CWdssTLQ.js";import"./inboxMenu-JThtQ0LU.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const xe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,xe as __namedExportsOrder,ke as default};
